module.exports = {
  name: 'mfe1',
  exposes: {
    './Routes': 'apps/mfe1/src/app/remote-entry/entry.routes.ts',
    './PaginatorComponent':
      'apps/mfe1/src/app/paginator/paginator.component.ts',
  },
};
