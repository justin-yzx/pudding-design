import { breakpoints } from '~theme/breakpoints';
import * as mixins from '~utils/mixins';

export const container = {
  mt: 3,
  mb: 4,
  border: (t) => {
    return `1px solid ${t.colors.border}`;
  },
  borderRadius: 'radius',
  // bg: 'props.bg',
  color: 'props.text',
  fontSize: 3,
};

export const content = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [`@media (min-width: ${breakpoints.tablet}px)`]: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
};

export const nameCont = {
  display: 'flex',
  flex: 1,
};

export const right = {
  display: 'flex',
  alignItems: 'center',
  flex: 1.5,
  justifyContent: 'flex-start',
  px: 3,
  [`@media (max-width: ${breakpoints.tablet}px)`]: {
    justifyContent: 'flex-start',
  },
};

export const line = {
  '&:hover': {
    background: '#fbfcff',
  },
  '& + &': {
    borderTop: (t) => {
      return `1px solid ${t.colors.border}`;
    },
  },
};

export const propTypeEnum = {
  position: 'relative',
  '&:hover div': {
    display: 'block',
    position: 'absolute',
    color: '#fff',
    background: '#333333dd',
    padding: '5px 10px',
    borderRadius: '2px',
    zIndex: '99'
  },
};

export const propTypeEnumText = {
  color: 'props.highlight',
  border: '1px solid props.highlight'
};

export const propTypeEnumHover = {
  display: 'none'
};
export const propTypeEnumItem = {
  display: 'block'
};


const column = {
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  marginBlockStart: '0.8em',
  marginBlockEnd: '0.8em',
  // flexGrow: 1,
  px: 3,
  '& ~ &': {
    bg: 'red',
  },
};

export const propName = {
  ...column,
  flex: 1.5,
  fontSize: '16px',
  color: 'props.highlight',
};

export const propType = {
  ...column,
  fontSize: '16px',
  flex: 1.2,
  color: 'props.text',
};

export const propRequired = {
  ...column,
  color: 'props.text',
  fontSize: '16px',
  flex: 1,
  opacity: 0.7,
};

export const defaultValue = {
  ...column,
  fontSize: '16px',
  flex: 1,
  color: 'props.defaultValue',
};


export const openDescBtn = {
  ...mixins.ghostButton,
  mt: 0,
  ml: 3,
  color: 'props.defaultValue',
};

export const description = {
  fontSize: '16px',
  m: 0,
  color: 'props.descriptionText',
  opacity: '0.85',
};
