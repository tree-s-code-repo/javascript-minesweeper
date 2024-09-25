/**
 * stackflow
 */

import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import MyActivity from './MyActivity';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    MyActivity,
  },
  initialActivity: () => 'MyActivity',
});
