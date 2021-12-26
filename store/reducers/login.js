import { acitonTypes } from '../actions/login';

export default function (state = null, { type, payload }) {
  switch (type) {
    case acitonTypes.setLoginUser:
      return payload;

    default:
      return state;
  }
}
