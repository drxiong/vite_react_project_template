// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Button } from 'antd'
import { vi } from 'vitest'

// 测试用例：测试按钮点击事件
describe('Button', () => {
  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn() // 创建一个模拟函数

    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    )
    const button = getByText('Click Me')

    fireEvent.click(button) // 模拟点击事件

    expect(handleClick).toHaveBeenCalledTimes(1) // 验证点击事件是否被调用
  })
})
