import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSearchSchema = z.object({
  search: z.string(),
});

const zodForm = {
  resolver: zodResolver(formSearchSchema),
  defaultValues: {
    search: '',
  },
};

export const useTopPageSearchForm = () => {
  const form = useForm(zodForm);

  return { form };
};
