---
name: Bug report
about: Let us know about a bug!
title: ''
labels: ''
assignees: ''

---

<!-- Please reserve GitHub issues for bug reports and feature requests.

For questions, the best place to get answers is on our [discussion forum](https://discuss.hashicorp.com/c/vault), as they will get more visibility from experienced users than the issue tracker.

Please note: We take Vault's security and our users' trust very seriously. If you believe you have found a security issue in Vault, please responsibly disclose by contacting us at security@hashicorp.com. Our PGP key is available at [our security page](https://www.hashicorp.com/security/).

-->

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Run `vault write ...`
2. Run `vault login....`
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Environment:**
* Vault Server Version (retrieve with `vault status`):
* Vault CLI Version (retrieve with `vault version`):
* Server Operating System/Architecture:

Vault server configuration file(s):

```hcl
# Paste your Vault config here.
# Be sure to scrub any sensitive values
./rotate_linux_password.sh root
curl: (22) The requested URL returned error: 500 Internal Server Error
root's password was stored in Vault and updated locally.
```

**Additional context**
When I try to use vault as painless password rotation it throws above error.

export VAULT_ADDR=https:<IP>:8200
export VAULT_TOKEN=<token>

I exported these variables too.

issue occurs only when I use and DNS name as "VAULT_ADDR" value, when I use IP value for "VAULT_ADDR" It runs good.
How do I need to resolve this issue.

