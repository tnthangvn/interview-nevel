import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formAllGameSchema = z.object({
  filter: z.string(),
});

const zodForm = {
  resolver: zodResolver(formAllGameSchema),
  defaultValues: {
    filter: '',
  },
};

export const useHotGameForm = () => {
  const form = useForm(zodForm);

  return { form };
};
