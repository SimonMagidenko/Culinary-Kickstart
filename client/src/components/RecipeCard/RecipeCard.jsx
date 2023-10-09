import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPE, ADD_RECIPE } from '../../utils/mutations';
import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    HStack,
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
            console.error('Failed to save recipe:', error);
        }
    };
    return (
        <>
            {props.recipes.map((data, i) => {
                return (
                    <Card
                        
                        key={i}
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                    >
                        <Image
                            objectFit="cover"
                            maxW={{ base: "100%", sm: "200px" }}
                            src={data.recipe.image}
                            alt="Caffe Latte"
                        />

                        <Stack>
                            <CardBody>
                                <Heading size="md">{data.recipe.label}</Heading>

                                <Text py="2">
                                    Meal Type: {data.recipe.mealType}
                                    <br />
                                    Dish Type: {data.recipe.dishType}
                                    <br />
                                    Servings: {data.recipe.yield}
                                    <br />
                                    Calories per serving: {Math.floor(data.recipe.calories.toFixed(2)/data.recipe.yield)}
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant="solid" colorScheme="blue" onClick={() => saveRecipeHandler(data.recipe.label, data.recipe.ingredientLine)}
                                    disabled={isSaved}>
                                    Save Recipe
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                );
            })}
        </>
    );
};

export default RecipeCard;
