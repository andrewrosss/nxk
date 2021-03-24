import {expect, test} from '@oclif/test'

describe('firebase:config:show', () => {
  test
  .stdout()
  .command(['firebase:config:show'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:config:show', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
