import { savePropertyDataToClass } from 'injection';
import { HANDLER_KEY } from '../constant';

export function handler(handlerName): MethodDecorator {
  return (target: object, propertykey: string, descriptor: PropertyDescriptor) => {
    savePropertyDataToClass(HANDLER_KEY, {
      method: propertykey,
      data: handlerName,
    }, target, propertykey);
  };
}
