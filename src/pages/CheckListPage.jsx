import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Container from "../components/ui/Container";
import StyledButton from "../components/ui/StyledButton";
import { colors } from "../utils/styles";

// REF: Handlding checkbox input in REACT
// https://reactjs.org/docs/forms.html

// const ProgressBar = ({ value = "0", max = "100" }) => {
//   // return <progress max={max} value={value} />;
//   return <ProgressBarContainer></ProgressBarContainer>
// };

const CheckListPage = () => {
  const [checked, setChecked] = useState({});
  const isChecked = (name) => {
    return checked[name] ? true : false;
  };

  useEffect(() => {
    // if checked string is cached in localStorge
    // reset checked state
    const cachedChecked = localStorage.getItem("doggo-requirements-checked");
    if (cachedChecked) {
      setChecked(JSON.parse(cachedChecked));
      // console.log("Success to load cached checked list");
    }
  }, []);

  const onCheckedChange = (name) => {
    if (checked[name]) {
      // CASE: ON -> OFF
      // setChecked((prev) => ({ ...prev, [name]: false }));
      // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
      // Prev State to Array & Filtered & then convert to Object
      // Clean up for unneccessary probs
      setChecked((prev) =>
        Object.keys(prev)
          .filter((key) => key !== name)
          .reduce((obj, key) => {
            obj[key] = prev[key];
            return obj;
          }, {})
      );
    } else {
      // CASE: OFF -> ON
      setChecked((prev) => ({ ...prev, [name]: true }));
    }
    // save checked localhost
    localStorage.setItem("doggo-requirements-checked", JSON.stringify(checked));
  };

  const resetAll = (e) => {
    e.preventDefault();
    setChecked({});
    localStorage.removeItem("doggo-requirements-checked");
    // console.log("reset");
  };

  const selectAll = (e) => {
    e.preventDefault();
    const selects = document.querySelectorAll(
      `.req-lists input[type="checkbox"]`
    );
    // console.log(selects.length);
    selects.forEach((checkbox) => {
      // console.log(checkbox.name);
      setChecked((prev) => ({ ...prev, [checkbox.name]: true }));
    });

    console.log("select all");
  };

  const CheckBoxInput = ({ name, label }) => {
    return (
      <li>
        <label
          className={`${isChecked(name) ? "req-label checked" : "req-label"}`}
        >
          <input
            name={name}
            type="checkbox"
            checked={isChecked(name)}
            onChange={() => onCheckedChange(name)}
          />
          <span className="label-text">{label}</span>
        </label>
      </li>
    );
  };

  const MessageBox = () => {
    const achieved = Object.keys(checked).length;
    const max = document.querySelectorAll(`input[type="checkbox"]`).length;

    let msg = "";
    let msgClass = "req-msg";

    if (achieved < 5) {
      msg = "Please start to review the website and check!";
      msgClass += " bg-gray";
    } else if (achieved < 15) {
      msg = `You achieved some requirements.`;
      msgClass += " bg-yellow";
    } else {
      msg = `Yay, almost there.`;
      msgClass += " bg-green";
    }

    return (
      <div className={msgClass}>
        <p className="msg-text">{msg}</p>
        <div
          className="msg-progress"
          style={{
            background: `linear-gradient(90deg, ${colors.green[9]} ${Math.floor(
              (achieved / max) * 100
            )}%, transparent ${Math.floor((achieved / max) * 100)}%)`,
          }}
        />
      </div>
    );
  };

  return (
    <CheckListPageContainer>
      <h1 className="page-title">Website Assignment Requirements</h1>
      <code className="page-description">
        You are required to create a hosted website with HTML form-validation,
        advanced CSS functionality, and JavaScript event-based code. Your
        website should have at least 5 webpages.
      </code>
      <MessageBox />

      <form>
        <fieldset className="req-section">
          <legend className="req-title">HTML and CSS code 25%:</legend>
          <ul className="req-lists">
            <CheckBoxInput label="text and images" name="textandimage" />
            <CheckBoxInput label="box model styles" name="boxmodel" />
            <CheckBoxInput label="HTML Tables" name="tables" />
            <CheckBoxInput
              label="Positioning (relative, absolute, fixed)"
              name="positioning"
            />
            <CheckBoxInput label="sub-menu" name="submenu" />
            <CheckBoxInput
              label="Advanced CSS (transforms, transitions, animations)"
              name="css"
            />
            <CheckBoxInput
              label="
              user’s own video and sound files [neither of which should be more
              than 5MB in size]
            "
              name="media"
            />
            <CheckBoxInput
              label="common and unique stylesheets"
              name="stylesheets"
            />
            <CheckBoxInput
              label="a print.css stylesheet to be used by all webpages"
              name="printcss"
            />
          </ul>
        </fieldset>
        <fieldset className="req-section">
          <legend className="req-title">Comprehensive Form Code 25%:</legend>
          <ul className="req-lists">
            <CheckBoxInput
              label="the major form elements (at least 6 different types of <input> {including submit and reset},
<select>, <textarea>)"
              name="formElms"
            />
            <CheckBoxInput
              label="appropriate properties of these tags (type / title / placeholder / min / max / size / maxlength / step / name / id)"
              name="formAttrs"
            />
            <CheckBoxInput
              label="appropriate styles for these tags"
              name="formStyles"
            />
            <CheckBoxInput label="required" name="formRequired" />
            <CheckBoxInput label="autofocus" name="formAutofocus" />
            <CheckBoxInput
              label="value hard-coded for select/radio"
              name="formSelect"
            />
            <CheckBoxInput label="simple Regular Expressions" name="formRegs" />
            <CheckBoxInput
              label="Appropriate form/fieldset/legend styles"
              name="formFields"
            />
          </ul>
        </fieldset>
        <fieldset className="req-section">
          <legend className="req-title">JavaScript Code 25%:</legend>
          <ul className="req-lists">
            <CheckBoxInput
              label="event-driven code (functions, multi-event functionality)"
              name="jsEvent"
            />
            <CheckBoxInput label="working with Date objects" name="jsDate" />
            <CheckBoxInput
              label="Local Storage usage for the form data"
              name="jsLocalStorage"
            />
          </ul>
        </fieldset>
        <fieldset className="req-section">
          <legend className="req-title">
            Website quality and WOW Factor 25% For example:
          </legend>
          <ul className="req-lists">
            <CheckBoxInput
              label="Is the website hosted (zipped file max. size 30MB)?"
              name="hosted"
            />
            <CheckBoxInput
              label="Do the webpages look like they are all part of the same website?"
              name="consistency"
            />
            <CheckBoxInput
              label="Does the website look professional?"
              name="professional"
            />
            <CheckBoxInput label="integration of Widgets;" name="widgets" />
          </ul>
        </fieldset>
        <div className="buttons">
          <StyledButton type="reset" onClick={resetAll}>
            Reset All
          </StyledButton>
          <StyledButton primary onClick={selectAll}>
            Select All
          </StyledButton>
        </div>
      </form>
    </CheckListPageContainer>
  );
};

const CheckListPageContainer = styled(Container)`
  background: none;
  max-width: 800px;
  margin: 0 auto;

  .page-title {
    margin-top: 0;
  }
  .page-description {
  }

  .req-msg {
    border-radius: 4px;
    margin: 1em 0;
    overflow: hidden;

    .msg-text {
      text-align: center;
      margin: 10px 0;
    }

    .msg-progress {
      transition: all ease-out 100ms;
      background: transparent;
      height: 4px;
      overflow: hidden;
    }

    &.bg-gray {
      color: ${colors.gray[9]};
      background: ${colors.gray[2]};
      // border: 2px solid ${colors.gray[6]};
    }
    &.bg-yellow {
      color: ${colors.yellow[9]};
      background: ${colors.yellow[2]};
      // border: 2px solid ${colors.yellow[6]};
    }
    &.bg-green {
      color: ${colors.green[9]};
      background: ${colors.green[2]};
      // border: 2px solid ${colors.green[6]};
    }
  }

  .req-section {
    margin-bottom: 1em;
    .req-title {
    }
    .req-lists {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 14px;
        padding: 4px 0;
        transition: all ease-out 100ms;

        &:hover {
          background: ${colors.green[1]};
        }
      }

      li + li {
        border-top: 1px solid ${colors.gray[2]};
      }

      // li {
      //   position: relative;
      // }

      // li + li {
      //   margin-top: 12px;
      //   &::before {
      //     content: "";
      //     width: 100%;
      //     height: 2px;
      //     position: absolute;
      //     background: ${colors.gray[2]};
      //     top: -6px;
      //     left: 0;
      //   }
      // }

      label {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        color: ${colors.gray[9]};

        &.checked {
          color: ${colors.green[9]};
        }

        .label-text {
          flex: 1;
          display: inline-block;
          margin: 0;
          &::first-letter {
            text-transform: capitalize;
          }
        }
      }
      input[type="checkbox"] {
        filter: saturate(0);
        margin-right: 10px;
        height: 16px;
        width: 16px;
      }
    }
  }
`;

export default CheckListPage;
