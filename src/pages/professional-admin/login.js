import { useForm } from '@mantine/form';
import { PasswordInput, TextInput, Button } from '@mantine/core';

export default function PRsLogin() {
    const form = useForm({
        initialValues: { email: '', password: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
 const onSubmit = (e) => {
     e.preventDefault();
    console.log(e);
 }
    return (
        <form onSubmit={onSubmit}>
            <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
            <PasswordInput
                placeholder="Password"
                label="Password"
                withAsterisk
                {...form.getInputProps('password')}
            />
            <Button type="submit" mt="sm">
                Submit
            </Button>
        </form>
    );
}