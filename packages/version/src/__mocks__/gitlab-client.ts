const releases = new Map();

// keep test data isolated
afterEach(() => {
  releases.clear();
});

const client = {
  repos: {
    createRelease: jest.fn((opts) => {
      releases.set(opts.name, opts);
      return Promise.resolve();
    }),
  },
};

export const createGitLabClient = jest.fn(() => client) as jest.Mock<any, any, any> & { releases: Map<any, any> };
createGitLabClient.releases = releases;
