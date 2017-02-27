import { createValueEvent } from './valueEvent';

export const createEvent = () => {
  const valueEvent = createValueEvent();
  let isTriggered = false;

  return {
    publish: () => {
      if (isTriggered) { return; }

      isTriggered = true;
      requestAnimationFrame(() => {
        isTriggered = false;

        valueEvent.publish();
      });
    },
    getHandle: () => valueEvent.getHandle()
  };
};
