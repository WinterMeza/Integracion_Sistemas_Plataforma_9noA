export enum RabbitMQ {
    ProductQueue = 'products',
    SupplyRequiredQueue = 'supplies',
    CommercialQueue = 'commercialorders',
    CODETAILQueue = 'commercialorderdetails',
    ClientQueue = 'clients',
    UserQueue = 'users',
}

export enum UserMsg {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
}

export enum SupplyRequiredMsg {
    CREATE = 'CREATE_SUPPLY',
    FIND_ALL = 'FIND_SUPPLYS',
    FIND_ONE = 'FIND_SUPPLY',
    UPDATE = 'UPDATE_SUPPLY',
    DELETE = 'DELETE_SUPPLY',
}

export enum ProductMsg {
    CREATE = 'CREATE_PRODUCT',
    FIND_ALL = 'FIND_PRODUCTS',
    FIND_ONE = 'FIND_PRODUCT',
    UPDATE = 'UPDATE_PRODUCT',
    DELETE = 'DELETE_PRODUCT',
}

export enum CommercialOrderMsg {
    CREATE = 'CREATE_COMMERCIALORDER',
    FIND_ALL = 'FIND_COMMERCIALORDERS',
    FIND_ONE = 'FIND_COMMERCIALORDER',
    UPDATE = 'UPDATE_COMMERCIALORDER',
    DELETE = 'DELETE_COMMERCIALORDER',
}

export enum DetailMsg {
    CREATE = 'CREATE_CODETAIL',
    FIND_ALL = 'FIND_CODETAILS',
    FIND_ONE = 'FIND_CODETAIL',
    UPDATE = 'UPDATE_CODETAIL',
    DELETE = 'DELETE_CODETAIL',
}

export enum ClientMsg {
    CREATE = 'CREATE_CLIENT',
    FIND_ALL = 'FIND_CLIENTS',
    FIND_ONE = 'FIND_CLIENT',
    UPDATE = 'UPDATE_CLIENT',
    DELETE = 'DELETE_CLIENT',
}