export enum RabbitMQ {
  ClientQueue = 'clients',
}

export enum ClientMsg {
  CREATE = 'CREATE_CLIENT',
  FIND_ALL = 'FIND_CLIENTS',
  FIND_ONE = 'FIND_CLIENT',
  UPDATE = 'UPDATE_CLIENT',
  DELETE = 'DELETE_CLIENT',
}