import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_RECIPE, ADD_RECIPE } from "../../utils/mutations";
import {
  Button,
  Text,
  Heading,
  Image,
  Card,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";

const RecipeCard = (props) => {
  const [saveRecipe] = useMutation(SAVE_RECIPE);
  const [addRecipe] = useMutation(ADD_RECIPE);
  const [isSaved, setIsSaved] = useState(false);

  const saveRecipeHandler = async (name, ingredients) => {
    try {
      await addRecipe({
        variables: { name: name, ingredients: [...ingredients] },
      });
      setIsSaved(true);
    } catch (error) {
      console.error("Failed to save recipe:", error);
    }
  };
  return (
    <>
      {props.recipes.map((data, i) => {
        return (
          <Card
            className="searchResultCard"
            key={i}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              className="image"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={data.recipe.image}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <div id="cardHeading">
                  <Heading size="lg">{data.recipe.label}</Heading>
                </div>
                <Text py="2">
                  <strong>Meal Type:</strong> {data.recipe.mealType}
                  <br />
                  <strong>Dish Type:</strong> {data.recipe.dishType}
                  <br />
                  <strong>Servings:</strong> {data.recipe.yield}
                  <br />
                  <strong>Calories per serving:</strong> {Math.floor(data.recipe.calories/data.recipe.yield)}
                </Text>
              </CardBody>

              <CardFooter>
                <Button
                  id="recipeCardButtons"
                  variant="solid"
                  colorScheme="gray"
                  onClick={() =>
                    saveRecipeHandler(
                      data.recipe.label,
                      data.recipe.ingredientLine
                    )
                  }
                  disabled={isSaved}
                >
                  Save Recipe
                </Button>
                <a className="instructionsAnchor" href={data.recipe.url}>
                  <Button>Recipe Instructions</Button>
                </a>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </>
  );
};

export default RecipeCard;
