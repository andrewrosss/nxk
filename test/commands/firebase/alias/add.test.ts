import {expect, test} from '@oclif/test'

describe('firebase:alias:add', () => {
  test
  .stdout()
  .command(['firebase:alias:add'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:alias:add', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
