type waitForAttributeValueParams = {
    element: HTMLElement;
    attribute: string;
    value: string;
};
declare const waitForAttributeValue: ({ element, attribute, value, }: waitForAttributeValueParams) => Promise<void>;
export default waitForAttributeValue;
