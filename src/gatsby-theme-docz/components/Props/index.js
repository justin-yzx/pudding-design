/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';

import { ChevronDown, ChevronUp } from 'gatsby-theme-docz/src/components/Icons';
import * as styles from './styles';

export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const propType = flowType || type;
  if (!defaultValue || !defaultValue.value) return null;
  if (defaultValue.value === "''") {
    return '[Empty string]';
  }
  if (propType && propType.name === 'string') {
    return defaultValue.value.replace(/\'/g, '"');
  }
  if (typeof defaultValue.value === 'object' && defaultValue.value.toString) {
    return defaultValue.value.toString();
  }
  return defaultValue.value;
};

const regexp = /Object\.keys\((.*)\)/;

export const Prop = (props) => {
  const {
    propName, prop = {}, getPropType, isToggle, ...rest
  } = props;
  const [showing, setShowing] = useState(isToggle || true);
  if (!prop.type && !prop.flowType) return null;

  const { type = {} } = prop;
  if (typeof type.value === 'string') {
    const matchedValues = type.value.match(regexp);
    if (matchedValues) {
      const KEY = matchedValues[1];
      const obj = rest[KEY];
      // const componentName = rest.of.name;
      type.value = obj ? Object.keys(obj).map((k) => {
        return ({ value: `${KEY}.${k}` });
      }) : [];
    }
  }
  return (
    <div sx={styles.line} data-testid="prop">
      <div sx={styles.content}>
        <div sx={styles.nameCont}>
          <div sx={styles.propName} data-testid="prop-name">
            {propName}
          </div>
          <div sx={styles.propType} data-testid="prop-type">
            {
              type.name === 'enum' &&
              <div sx={styles.propTypeEnum}>
                <span sx={styles.propTypeEnumText}>{type.name}</span>
                <div sx={styles.propTypeEnumHover}>
                  {
                    Object.values(type.value).map(({ value: val }) => {
                      return <span key={val} sx={styles.propTypeEnumItem}>{val}</span>;
                    })
                  }
                </div>
              </div>
            }
            {
              type.name === 'union' &&
              <div>
                {
                  type.value.map(({ value: val, name }) => {
                    return val || name;
                  }).join(' | ')
                }
              </div>
            }
            {
              (type.name !== 'union' && type.name !== 'enum') && getPropType(prop)
            }
          </div>
          {prop.required && (
            <div sx={styles.propRequired} data-testid="prop-required">
              <strong>[required]</strong>
            </div>
          )}
          {prop.defaultValue && (
            <div sx={styles.defaultValue} data-testid="prop-default-value">
              <em>{getDefaultValue(prop)}</em>
            </div>
          )}
        </div>
        <div sx={styles.right}>
          {showing && prop.description && (
            <div sx={styles.description} data-testid="prop-description">
              {prop.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Props = ({
                        props, getPropType, isToggle, ...rest
                      }) => {
  const entries = Object.entries(props);
  return (
    <div sx={styles.container} data-testid="props">
      {/* <div>全部展开</div> */}
      {entries.map(([key, prop], index) => {
        return (
          <Prop
            index={index}
            key={key}
            propName={key}
            prop={prop}
            getPropType={getPropType}
            isToggle={isToggle}
            {...rest}
          />
        );
      })}
    </div>
  );
};
