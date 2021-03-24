import {expect, test} from '@oclif/test'

describe('firebase:alias:list', () => {
  test
  .stdout()
  .command(['firebase:alias:list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:alias:list', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
