import {expect, test} from '@oclif/test'

describe('mailchimp:alias:add', () => {
  test
  .stdout()
  .command(['mailchimp:alias:add'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mailchimp:alias:add', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
