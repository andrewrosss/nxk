import {expect, test} from '@oclif/test'

describe('firebase:auth:user:update', () => {
  test
  .stdout()
  .command(['firebase:auth:user:update'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:auth:user:update', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
