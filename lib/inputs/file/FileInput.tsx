import { getClassName } from '#helpers';
import './styles/file-input.scss';
import { Input, InputProps } from '@inputs';

type FileInputProps = InputProps;

export function FileInput(
    {
        className,
        ...props
    }: FileInputProps) {
    return <Input
        className={getClassName('file', className)}
        {...props}
        type='file'
    />;
}