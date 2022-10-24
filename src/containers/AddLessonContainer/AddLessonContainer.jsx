import "./AddLessonContainer.scss";
import { useState } from "react";
import Short from "../../components/Short/Short";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import Button from "../../components/Button/Button";
import MediaUploadBox from "../../components/MediaUploadBox/MediaUploadBox";
import AddLessonAdditionalBoxes from "../../components/AddLessonAdditionalBoxes/AddLessonAdditionalBoxes";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer";
import QuestionContainer from "../../containers/QuestionContainer/QuestionContainer";
import LessonContentPreview from "../../components/LessonContentPreview/LessonContentPreview";

const AddLessonContainer = ({
  handleShortValue,
  handleSubmit,
  handleCancel,
}) => {
  const [inputs, setInputs] = useState("Lesson");

  const onChange = (event) => {
    if (event.target.value === "Lesson") {
      setInputs("Lesson");
    } else if (event.target.value === "Assessment Quiz") {
      setInputs("Assessment Quiz");
    }
  };

  const [pageInfo, setPageInfo] = useState({
    file: null,
    fileName: "",
    shortInputOne: "",
    shortInputTwo: "",
    freeTypeInputOne: "",
    freeTypeInputTwo: "",
  });

  const handleFileChange = (e) => {
    if (!pageInfo.file) setPageInfo({ fileName: e.target.files[0].name });
    pageInfo.file
      ? setPageInfo({ ...pageInfo, file: null })
      : setPageInfo({
          ...pageInfo,
          file: URL.createObjectURL(e.target.files[0]),
        });
  };

  let lessonsArray = [];
  let questionsArray = [];

  const addData = (e) => {
    if (inputs == "Lesson") {
      let handleFreeTypeValueText = e.target.value;
      let  handleShortValueText = e.target.value;
      console.log(handleShortValueText)
      lessonsArray.push(handleFreeTypeValueText, handleShortValueText);
      console.log(lessonsArray);
    }
  };

  return (
    <div className="lesson">
      <div className="lesson__container">
        <Short
          shortLabelText="Lesson Name"
          shortType="text"
          // No placeholder needed
          handleShortValue={handleShortValue}
          inputClassName="short__input"
          name="lesson name"
        />
        <SelectComponent className="lesson__select" onChange={onChange} />
        <Short
          shortLabelText="Estimated Completion Time"
          shortType="text"
          // No placeholder needed
          handleShortValue={handleShortValue}
          inputClassName="short__input"
          name="estimated completion time"
        />
        {inputs == "Lesson" ? (
          <AddLessonAdditionalBoxes
            handleFreeTypeValue={handleFreeTypeValue}
            handleShortValue={handleShortValue}
          />
        ) : (
          <QuestionAnswer
            // handleShortValue={handleShortValue}
            // onSubmit={onSubmit}
            // handleCheckboxValue={handleCheckboxValue}
            // handleClickCheckbox={handleClickCheckbox}
          />
        )}
        ;
        <h5 className="lesson__add" onClick={addData}>
          Add +
        </h5>
        <div className="lesson__buttons">
          <Button
            style={"button light-grey round-border large"}
            textStyle={"text large-text light-grey"}
            buttonText={"Cancel"}
            buttonFunction={handleCancel}
          />
          <Button
            style={"button black round-border large"}
            textStyle={"text large-text black"}
            buttonText={"Submit"}
            buttonFunction={handleSubmit}
          />
        </div>
      </div>
      <div className="add-lesson__upload">
        <MediaUploadBox
          file={pageInfo.file}
          handleFileChange={handleFileChange}
          uploadLabelName="Lesson Upload"
          uploadButtonText="Media Upload"
          fileName={pageInfo.fileName}
        />
      </div>
      <div className="lesson__content">
        {inputs == "Lesson" ? (
          <LessonContentPreview
        
            lessonsArray={lessonsArray}
            // handleEdit={handleEdit}
            // handleDelete={handleDelete}
          />
        ) : (
          <QuestionContainer
            questionsArray={questionsArray}
            // handleEdit={handleEdit}
            // handleDelete={handleDelete}
          />
        )}
        ;
      </div>
    </div>
  );
};

export default AddLessonContainer;
