export interface Address {
    id: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    suburb: string;
    town: string;
    poBox: string;
    latitude: number;
    longitude: number;
    propertyId: string;
    propertyName: string;

}

export interface AddressState {
    addresses: Address[];
    loading: boolean;
    error: string;
}

export interface AddressAction {
    getAllAddresses: () => void;
}
