import React from 'react'

import Button from './button'

const BaseButton = {
  component: Button,
  title: 'Button',
}

export default BaseButton

export const PrimaryBtn = (args) => <Button {...args}>Primary Button</Button>
PrimaryBtn.storyName = 'Primary Button'
PrimaryBtn.args = { className: 'w-1/3', type: 'button', variant: 'primary' }

export const SecondaryBtn = (args) => (
  <Button {...args}>Secondary Button</Button>
)
SecondaryBtn.storyName = 'Secondary Button'
SecondaryBtn.args = { ...PrimaryBtn.args, variant: 'secondary' }

export const LinkBtn = (args) => <Button {...args}>Link Button</Button>
LinkBtn.storyName = 'Link Button'
LinkBtn.args = {
  type: 'link',
  className: 'w-1/3',
  variant: 'secondary',
}
