import { removeExtraSpaces } from '../../../../utils';

export const cardOwnerPattern = (owner: string): string => removeExtraSpaces(owner).toUpperCase();
