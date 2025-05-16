import { type ComponentProps, type ComponentRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
