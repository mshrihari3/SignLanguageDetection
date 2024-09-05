CREATE TABLE kinesis_table (
  `partition_key` STRING METADATA FROM 'partition-key',
  `boxes` ARRAY<ARRAY<DOUBLE>>,
  `classes` ARRAY<INT>,
  `scores` ARRAY<DOUBLE>,
  `country` STRING,
  `timestamp` TIMESTAMP(3) METADATA FROM 'timestamp'
) WITH (
  'connector' = 'kinesis',
  'stream' = 'SignDataStream',
  'aws.region' = 'us-west-1',
  'scan.stream.initpos' = 'LATEST',
  'format' = 'json'
);

-- Aggregate Sign Detetction
-- Replace index and date
SELECT
  class,
  DATE_FORMAT(timestamp, 'yyyy-MM-dd') AS query_date,
  COUNT(*) AS query_count
FROM (
  SELECT
    `classes`[index] AS class,
    `timestamp`
  FROM
    kinesis_table
  CROSS JOIN UNNEST(`classes`) AS t(index, class)
)
GROUP BY class, DATE_FORMAT(timestamp, 'yyyy-MM-dd');

-- Country-Based Distribution
SELECT
  country,
  sign,
  SUM(count) AS total_sign_count
FROM sign_queries
WHERE 
  country IN ('IND', 'USA') AND 
  timestamp >= TIMESTAMPADD(MONTH, -2, CURRENT_TIMESTAMP)
GROUP BY country, sign
ORDER BY country, sign;
