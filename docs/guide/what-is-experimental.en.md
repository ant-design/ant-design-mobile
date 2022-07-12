# what is experimental

Experimental features are some features that we are still in the exploratory stage, such as some components whose API and interaction are not yet certain, some technical solutions that may be adjusted in the future, and some component properties whose names or meanings may change in the future. We will release it publicly ahead of time, and **it will be identified by a reagent bottle <Experimental></Experimental> icon** on the document. Developers can try it out, feedback and suggestions are welcome~

**In future minor and major releases, these experimental features may have functional changes, API break changes, or even be completely removed**. But don't worry, we will **explicitly warn you in the release log** when:

- when an experimental feature breaks change
- when an experimental feature has reached the maturity standard and is changed from an experimental feature to a regular feature

**So if you use these experimental features, we recommend:**

- Subscribe and follow our [release log](https://github.com/ant-design/ant-design-mobile/releases) (highly recommended)
- Use lockfile to lock the version (recommended)
- Manually set the version range of antd-mobile dependencies to `~` (recommended)

Of course, we maintain consistently strict quality standards for both experimental and regular features.
