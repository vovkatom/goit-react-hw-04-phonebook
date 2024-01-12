import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter =({value, onChange})=>{

    return (
        <div>
            <Label>Find contacts by name
              <Input type='text' value={value} onChange = {onChange}></Input>
            </Label>
          </div>
    )

};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;