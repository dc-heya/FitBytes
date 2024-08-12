import React, {useMemo} from 'react';

const DailyDiet = React.memo(({ calorieRequirement, breakfastObjects }) => {
    // Function to split food items into categories
    const splitIntoCategories = (foodItems) => {
        const categories = {};
        foodItems.forEach(item => {
            if (!categories[item.Category]) {
                categories[item.Category] = [];
            }
            categories[item.Category].push(item);
        });
        return categories;
    };

    // Function to generate a random daily diet plan
    const generateDietPlan = (foodItems, calorieRequirement) => {
        // Step 1: Split food items into categories
        const categories = splitIntoCategories(foodItems);
    
        // Step 2: Generate the plan
        const dietPlan = {};
    
        // Set to keep track of selected items
        const selectedItemsSet = new Set();
    
        // Initialize current calorie count
        let currcalorie = 0;
    
        // Iterate over categories
        Object.keys(categories).forEach(category => {
            const itemsInCategory = categories[category];
            const totalItems = itemsInCategory.length;
    
            if (currcalorie >= calorieRequirement) {
                // If the total calorie count meets or exceeds the requirement, exit the loop
                return;
            }
    
            if (category === 'Breads' || category === 'Indian bread' || category === 'Juice' || category.includes('Tea & Coffee') || category === 'Beverages' || category === 'Dairy' || category === 'Soup') {
                // For specific categories, limit to maximum 1 item
                const numItems = Math.min(totalItems, 1);
                for (let i = 0; i < numItems; i++) {
                    const randomIndex = Math.floor(Math.random() * itemsInCategory.length);
                    const randomItem = itemsInCategory[randomIndex];
                    if (!selectedItemsSet.has(randomItem) && currcalorie + randomItem.Calories <= calorieRequirement) {
                        dietPlan[category] = dietPlan[category] || [];
                        dietPlan[category].push(randomItem);
                        currcalorie += randomItem.Calories;
                        selectedItemsSet.add(randomItem);
                    }
                }
            } else {
                // For other categories, randomly select items until currcalorie >= calorieRequirement
                for (let i = 0; i < totalItems && currcalorie < calorieRequirement; i++) {
                    const randomIndex = Math.floor(Math.random() * itemsInCategory.length);
                    const randomItem = itemsInCategory[randomIndex];
                    if (!selectedItemsSet.has(randomItem) && currcalorie + randomItem.Calories <= calorieRequirement) {
                        dietPlan[category] = dietPlan[category] || [];
                        dietPlan[category].push(randomItem);
                        currcalorie += randomItem.Calories;
                        selectedItemsSet.add(randomItem);
                    }
                }
            }
        });
    
        return dietPlan;
    };
    




    // Generate the diet plan
    const dietPlan = generateDietPlan(breakfastObjects, calorieRequirement);

    // Render the diet plan
    return (
        <div className="container mt-5">
            <h2 className="text-2xl font-weight-bold text-center mb-3 text-primary">Diet Plan Recommendation</h2>
            <p className="text-xl font-weight-bold text-center mb-4 text-secondary">Calorie Requirement: {calorieRequirement.toFixed(2)}</p>
            <div className="list-group">
                {Object.keys(dietPlan).map(category => (
                    <div key={category} className="list-group-item bg-light">
                        <h3 className="mb-3 text-violet-900">{category}</h3>
                        <ul className="list-group">
                            {dietPlan[category].map((item, index) => (
                                <li key={index} className="alert alert-info text-center">
                                    {item.food_items} - {item.Calories} Calories
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
},(prevProps, nextProps) => {
    return !(prevProps.calorieRequirement === nextProps.calorieRequirement && prevProps.breakfastObjects === nextProps.breakfastObjects);
});

export default DailyDiet;
