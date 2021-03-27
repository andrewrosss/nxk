import {expect, test} from '@oclif/test'

describe('firebase:auth:user:get', () => {
  test
  .stdout()
  .command(['firebase:auth:user:get'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:auth:user:get', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
