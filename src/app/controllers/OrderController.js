import * as Yup from 'yup';
import Order from '../schemes/Order';

class OrderController {
  async store(request, response) {
    const scheme = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });

    try {
      scheme.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    // const { name } = request.body;

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
    };

    return response.status(201).json(order);
  }
}

export default new OrderController();
