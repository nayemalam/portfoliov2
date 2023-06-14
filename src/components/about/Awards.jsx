import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import awards from '../../data/Awards';

class Awards extends Component {
  render() {
    return (
      <div className="awards">
        <h3 className="titleWithBackground">Awards</h3>
        <table>
          <tbody>
            {awards.map((item, id) => (
              <tr key={id} data-aos="fade">
                <td>
                  <FontAwesomeIcon
                    className="icon-bullet"
                    icon={faCaretRight}
                  />{' '}
                  &nbsp; {item.title}
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Awards;
