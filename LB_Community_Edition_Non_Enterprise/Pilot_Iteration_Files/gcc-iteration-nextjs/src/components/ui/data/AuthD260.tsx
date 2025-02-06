import useAuth from '@/components/ui/layout/hooks/useAuth.ts'
import AuthCard from '@/feature/flowbite-ui/card/AuthCard.tsx'
import LoginForm from '@/feature/tanstack-form/LoginForm.tsx'
import { useForm } from '@tanstack/react-form'

export default function AuthD260() {
  const { loginMutation } = useAuth()
  const form = useForm({
    defaultValues: { email: '', password: '' },
    onSubmit: async ({ value }) => onSubmit(value),
  })
  const onSubmit = (values) => {
    return loginMutation.mutate(values)
  }
  return (
    <section className="flex grow items-center bg-gray-50 dark:bg-gray-900">
      <AuthCard title={'Log in'}>
        <LoginForm handleSubmit={form.handleSubmit}></LoginForm>
      </AuthCard>
    </section>
  )
}
