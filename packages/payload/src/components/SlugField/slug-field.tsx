'use client'

import { useCallback, useEffect, type FC, type MouseEvent } from 'react'
import {
  Button,
  FieldLabel,
  TextInput,
  useField,
  useFieldProps,
  useFormFields,
} from '@payloadcms/ui'
import { type TextFieldClientProps } from 'payload'

import { formatSlug } from '@trroev/payload/helpers/formatSlug'

import './index.scss'

type SlugFieldProps = {
  checkboxFieldPath: string
  fieldToUse: string
} & TextFieldClientProps

export const SlugField: FC<SlugFieldProps> = ({
  checkboxFieldPath: checkboxFieldPathFromProps,
  field,
  fieldToUse,
}) => {
  const { label } = field
  const { path, readOnly: readOnlyFromProps } = useFieldProps()

  const checkboxFieldPath = path.includes('.')
    ? `${path}.${checkboxFieldPathFromProps}`
    : checkboxFieldPathFromProps

  const { setValue, value } = useField<string>({ path })

  const { setValue: setCheckboxValue, value: checkboxValue } =
    useField<boolean>({
      path: checkboxFieldPath,
    })

  const fieldToUseValue = useFormFields(([fields, _dispatch]) => {
    if (
      !fieldToUse ||
      !(fieldToUse in fields) ||
      typeof fields[fieldToUse] !== 'object' ||
      !('value' in fields[fieldToUse]) ||
      typeof fields[fieldToUse].value !== 'string'
    ) {
      return ''
    }

    return fields[fieldToUse].value
  })

  useEffect(() => {
    if (checkboxValue) {
      if (fieldToUseValue) {
        const formattedSlug = formatSlug(fieldToUseValue)

        if (value !== formattedSlug) setValue(formattedSlug)
      } else if (value !== '') {
        setValue('')
      }
    }
  }, [fieldToUseValue, checkboxValue, setValue, value])

  const handleLock = useCallback(
    (evt: MouseEvent) => {
      evt.preventDefault()

      setCheckboxValue(!checkboxValue)
    },
    [checkboxValue, setCheckboxValue],
  )

  const readOnly = readOnlyFromProps || checkboxValue

  return (
    <div className="field-type slug-field-component">
      <div className="label-wrapper">
        <FieldLabel field={field} htmlFor={`field-${path}`} label={label} />

        <Button buttonStyle="none" className="lock-button" onClick={handleLock}>
          {checkboxValue ? 'Unlock' : 'Lock'}
        </Button>
      </div>

      <TextInput
        label=""
        onChange={setValue}
        path={path}
        readOnly={readOnly}
        value={value}
      />
    </div>
  )
}
