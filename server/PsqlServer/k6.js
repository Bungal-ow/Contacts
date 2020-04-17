import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   vus: 100,
//   duration: '10s',
// };

export const options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '60s', target: 2000 },
  ],
};

export default function () {
  const id = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
  const res = http.get(`http://localhost:3000/api/property/${id}`);
  check(res, {
    'status was 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  sleep(0.01);
}

// export default function () {
//   const res = http.post('http://localhost:3000/api/property');
//   check(res, {
//     'status was 201': (r) => r.status === 201,
//     'transaction time OK': (r) => r.timings.duration < 200,
//   });
//   sleep(1);
// }
