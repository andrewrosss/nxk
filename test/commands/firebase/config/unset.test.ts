import {expect, test} from '@oclif/test'

describe('firebase:config:unset', () => {
  test
  .stdout()
  .command(['firebase:config:unset'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:config:unset', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
