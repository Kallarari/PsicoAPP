import {
  Box,
  Button,
  Chip,
  Drawer,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { colorFill } from "ionicons/icons";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import DiarysPageComponents from "./DiaryCardComponent";
import AssistantIcon from "@mui/icons-material/Assistant";

const DiaryHabitsComponent: React.FC = () => {
  const [isDrowerOpen, setIsDrowerOpen] = useState(false);
  const [possibleHabits, setPossibleHabits] = useState<
    { value: string; isActive: boolean }[]
  >([
    { value: "Álcool", isActive: false },
    { value: "Exercício físico", isActive: false },
    { value: "Ócio criativo", isActive: false },
    { value: "Passeio ao ar livre", isActive: false },
    { value: "Drogas", isActive: false },
  ]);
  const [includedHabits, setIncludedHabits] = useState<string[]>([]);

  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    borderRadius: "10px",
    "& .MuiPaper-root": {
      backgroundColor: "#40AED3",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      padding: theme.spacing(2),
    },
  }));

  const HabitsResultTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    width:"100%",
    textAlign:'center'
  }));

  const HabitsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    margin: "20px auto 10px auto",
  }));

  function handleChangeActivity(item: string) {
    let listOfHabit = possibleHabits.map((habit) =>
      habit.value == item
        ? { value: habit.value, isActive: !habit.isActive }
        : { ...habit }
    );
    setPossibleHabits([...listOfHabit]);
  }
  return (
    <>
      <DiarysPageComponents
        Icon={
          <AssistantIcon
            style={{ fill: "#40AED3", width: "40px", height: "40px" }}
          />
        }
        onOpenDrower={() => setIsDrowerOpen(true)}
        subtitle="Habitos do dia"
        title="habitos comuns"
      />
      <StyledDrawer
        anchor={"bottom"}
        open={isDrowerOpen}
        onClose={() => setIsDrowerOpen(false)}
      >
        <HabitsResultTitle>Habitos do dia</HabitsResultTitle>
        <HabitsContainer>
          {possibleHabits.map((item) => (
            <Chip
              label={item.value}
              variant={item.isActive ? "filled" : "outlined"}
              onClick={() => handleChangeActivity(item.value)}
            />
          ))}
        </HabitsContainer>
      </StyledDrawer>
    </>
  );
};

export default DiaryHabitsComponent;
