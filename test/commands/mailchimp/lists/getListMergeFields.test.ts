import {expect, test} from '@oclif/test'

describe('mailchimp:lists:getListMergeFields', () => {
  test
  .stdout()
  .command(['mailchimp:lists:getListMergeFields'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mailchimp:lists:getListMergeFields', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
