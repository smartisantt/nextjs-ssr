import request from './request';

export default async function getMovies(page = 1, limit = 10) {
  let resp = await request.get('/api/student/findAll?appkey=15928140420_1585573953214', {
    params: {
      page,
      limit,
    },
  });
  return resp.data;
}
