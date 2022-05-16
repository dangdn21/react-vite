import type { EnvFileProps as EnvironmentFileProperties } from './modules/vars';
import { Vars as Variables } from './modules/vars';

Variables.setupVars(import.meta.env as unknown as EnvironmentFileProperties);
