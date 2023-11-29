import { StylesConfig, CSSObjectWithLabel, OptionProps, GroupBase } from 'react-select';
import { OptionType } from '../../services/data';

export const customStyles: StylesConfig<OptionType, true, GroupBase<OptionType>> = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    borderRadius: '8px',
    padding: '2px 0',
    border: '1px solid #323b54',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: 'white',
    fontSize: '16px',
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'white',
    fontSize: '14px',
  }),
  multiValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderRadius: '4px',
    fontSize: '14px',
  }),
  multiValueLabel: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'white',
  }),
  multiValueRemove: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
  option: (provided: CSSObjectWithLabel, state: OptionProps<OptionType, true>) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#323b54' : 'transparent',
    color: 'white',
    '&:hover': {
      backgroundColor: '#323b54',
    },
  }),
};
