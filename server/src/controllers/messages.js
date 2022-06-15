import Model from '../models/model';
import { sendNotificationToClient } from '../notify';

const messagesModel = new Model('messages');
const mockData = [
  {
    name: 'name1',
    message: 'message1',
  },
  {
    name: 'name2',
    message: 'message2',
  },
];

export const messagesPage = async (req, res) => {
  try {
    // const data = await messagesModel.select('name, message');
    // res.status(200).json({ messages: data.rows });
    res.status(200).json({ messages: mockData });

  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    // const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [
      'eEa1Yr4Hknqzjxu3P1G3Ox:APA91bF_DF5aSneGdvxXeyL6BIQy8wd1f600oKE100lzqYq2zROn50wuRe9nB-wWryyJeBmiPVutYogKDV2m36PoEbKK9MOpJPyI-UXqMdYiWLEae8MoEXB4mVz9bXD0IwP7bappnLqg',
      'eUGEdZQ3_ZncB59cnuRuoW:APA91bHTRuLWYS-xhnSdxi1fuUwKc3zCyBGK3Um-Fc85vizUcPDqHgbW9JbBj7hytHlK1Xin-BSavMBs-QfVnjNqckWs_DXOi4haghk0kauGxnaf9obHBn5qjniTZ3csWC5OeiiW2OfP',
      'eV3nFDOLZdegqK7n4d1tUe:APA91bFw7MPCx2KayrrxDSvUbzNcgDSJatE-lT_uRX4Rquc19nu6zWh9kLFbjobXexl2V_TR3gnTicLwFsAzipYIHAMaFx1glSV1lJiSYEqxvl1ve8QxVKhWL3vYY7_-oIn8p3sqEuAL'
    ];
    const notificationData = {
      title: 'New message',
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    const mock_data = mockData.push({
      name,
      message
    })
    res.status(200).json({ messages: mock_data });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
