import {expect, test} from '@oclif/test'

describe('firebase:config:get', () => {
  test
  .stdout()
  .command(['firebase:config:get'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['firebase:config:get', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
