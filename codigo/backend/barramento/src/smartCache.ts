
import {createClient} from 'redis';

const url = "https://b2cqzoyvwi.execute-api.us-east-1.amazonaws.com/dev/user"

const redisClient: any = createClient({
  socket: {
    host: "clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com",
    port: 6379,
    tls: true,
  },
});

  
export async function getCache(id: string): Promise<any> {

  const result = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  updateProbabilities();
  clearCacheIfNecessary();
  
  return result
}

export async function postCache(data: any): Promise<any> {

  const result = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  updateProbabilities();
  clearCacheIfNecessary();

  return result;
}

function clearCacheIfNecessary(): void {

  const totalCounter = calculateTotalCounter();

  if (totalCounter > 10000) {
    clearLeastProbableData();
  }
}

function calculateTotalCounter(): number {
  let totalCounter = 0;

  return totalCounter;
}


async function clearLeastProbableData(): Promise<void> {
  let minProbability = Infinity;
  let leastProbableId = '';

  updateProbabilities();

  const data = await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  for (let i = 0; i < (data as unknown as any[]).length; i++) {
    const item: any = (data as unknown as any[])[i];

    if (item.probability < minProbability) {
      minProbability = item.probability;
      leastProbableId = item.id;
    }
  }

  const result = await fetch(`${url}/${leastProbableId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

}

async function updateProbabilities(): Promise<void> {

  const globalMean = calculateGlobalMean();
  const globalVariance = calculateGlobalVariance(await globalMean);

  const counter = await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data: any = {}; 

  for (let i = 0; i < (counter as unknown as any[]).length; i++) {
    data.counter = `${parseInt((counter as unknown as any[])[i].counter || 0)}`;
    data.probability = gaussianProbability(data.counter, await globalMean, await globalVariance);

    const result = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

  }
}

async function calculateGlobalMean(): Promise<number> {
  let totalCounter = 0;
  let totalCount = 0;

  const result = await fetch(`${url}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  for (let i = 0; i < (result as unknown as any[]).length; i++) {
    const counter = parseInt((result as unknown as any[])[i].counter || 0);
    totalCounter += counter;
    totalCount++;
  }

  if (totalCount > 0) {
    return totalCounter / totalCount;
  } else {
    return 0; 
  }
}


async function calculateGlobalVariance(globalMean: number): Promise<number> {
  let sumSquaredDifferences = 0;
  let totalCount = 0;

  const result = await fetch(`${url}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  for (let i = 0; i < (result as unknown as any[]).length; i++) {
    const counter = parseInt((result as unknown as any[])[i].counter || 0);
    const difference = counter - globalMean;
    sumSquaredDifferences += difference ** 2;
    totalCount++;
  }

  if (totalCount > 0) {
    return sumSquaredDifferences / totalCount;
  } else {
    return 0;
  }
}

function gaussianProbability(x: number, mean: number, variance: number): number {
  const exponent = -Math.pow(x - mean, 2) / (2 * variance);
  const coefficient = 1 / (Math.sqrt(2 * Math.PI * variance));
  return coefficient * Math.exp(exponent);
}
