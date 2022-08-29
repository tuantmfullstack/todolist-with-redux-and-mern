import { useToast } from '@chakra-ui/react';

const useNotification = () => {
  const toast = useToast();

  const notification = ({ title, description, status }) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const sendNotification = (fn) => {
    fn.then((res) => {
      if (res.error) {
        return notification({
          title: 'Something went wrong!',
          description: res.payload,
          status: 'error',
        });
      }

      notification({
        title: 'Success',
        description: res.payload.message,
        status: 'success',
      });
    });
  };

  return { sendNotification };
};

export default useNotification;
