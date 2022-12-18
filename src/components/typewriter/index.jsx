import React, { useEffect, useState } from 'react'
import EasyTyper from 'easy-typer-js'

import './index.less'

class Typewriter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '',
      typer: null
    }
    this.initTyper = this.initTyper.bind(this)
    this.changeOutput = this.changeOutput.bind(this)
  }
  componentDidMount () {
    this.initTyper()
  }

  componentWillUnmount () {
    this.typer.close()
  }

  initTyper () {
    // 配置对象
    const obj = {
      output: '',
      isEnd: false,
      speed: 80,
      singleBack: false,
      sleep: 0,
      type: 'normal',
      backSpeed: 40,
      sentencePause: false
    }
    const message = '生日快乐哇！ 虽然现在疫情肆虐，你也很想出去，再加上你身边的朋友一个一个的🐏了，但是或许'
    // 实例化
    this.typer = new EasyTyper(obj, message, this.completeAsentence, this.changeOutput)
  }

  // 输出完毕后的回调函数
  completeAsentence () {
    console.log('输出完毕！长官！')
  }

  // 钩子函数和setState结合
  changeOutput (output) {
    this.setState(state => ({
      output: output
    }))
  }

  render () {
    return (
      <div className='typewriter h-2/3 w-2/3 border-4 border-gray-400 hover:border-red-100 md:rounded-lg relative'>
        {/* 小旗子 */}
        <div class="happy">
          {/* 小旗子 */}
          <div class="ribbon">
            <div class="cord"></div>
            <div class="triangle triangle-1"></div>
            <div class="triangle triangle-2"></div>
            <div class="triangle triangle-3"></div>
            <div class="triangle triangle-4"></div>
            <div class="triangle triangle-5"></div>
            <div class="triangle triangle-6"></div>
            <div class="triangle triangle-7"></div>
            <div class="triangle triangle-8"></div>
          </div>

          {/* 彩旗 */}
          <div class="ribbon1">
            <div class="cord"></div>
            <div class="triangle triangle-1"></div>
            <div class="triangle triangle-2"></div>
            <div class="triangle triangle-3"></div>
            <div class="triangle triangle-4"></div>
            <div class="triangle triangle-5"></div>
            <div class="triangle triangle-6"></div>
            <div class="triangle triangle-7"></div>
            <div class="triangle triangle-8"></div>
          </div>
        </div>

        {/* 内容 */}
        <div className='absolute top-20 left-10'>
          <p className='font-mono md:text-3xl'>{this.state.output}</p>
        </div>
      </div>
    )
  }
}

export default Typewriter