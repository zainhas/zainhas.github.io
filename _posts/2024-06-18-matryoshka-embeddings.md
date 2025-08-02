---
layout: post
title: OpenAI's Matryoshka Embeddings in Weaviate
date: 2024-06-18
description: How to use OpenAI's embedding models trained with Matryoshka Representation Learning in a vector database like Weaviate
tags: embeddings openai weaviate vector-databases machine-learning
categories: technical-blog
thumbnail: /assets/img/posts/2024-06-18-openais-matryoshka-embeddings/hero.png
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/2024-06-18-openais-matryoshka-embeddings/hero.png" title="OpenAI's Matryoshka Embeddings" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In [January, OpenAI released](https://openai.com/index/new-embedding-models-and-api-updates/) two new embedding models: `text-embedding-3-small` and `text-embedding-3-large`. These models are trained with the [Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) technique, which lets developers trade off performance and cost in embeddings.

Since then, we've discussed Matryoshka embeddings in various formats, such as in our 89th Weaviate podcast episode, [Matryoshka Embeddings with Aditya Kusupati, Zach Nussbaum, and Zain Hasan](https://youtu.be/-0m2dZJ6zos?si=dGO_jIfrKPAqHo-W), and in our [Weaviate paper review, Matryoshka Representation Learning](https://weaviate.io/papers/paper21).

This article briefly covers the fundamentals of Matryoshka Representation Learning and shows how to use the newly released OpenAI's Matryoshka embedding models with the Weaviate vector database.

## What is Matryoshka Representation Learning?

[Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) is a technique used in training embedding models. It allows you to trade off a small amount of accuracy in exchange for much smaller embedding sizes. Thus, you can store more information at a lower cost and search for it faster.

The embeddings are shortened by removing dimensions from the end of the sequence and only using a subset of the dimensions of the embedding vector. For example, you can only use the first 8, 16, 32, etc. dimensions (or any other slice of dimensions) of a vector that originally had 1536 dimensions.

In contrast to common vector embeddings, where all dimensions are equally important, in Matryoshka embeddings, earlier dimensions store more information than dimensions later on in the vector, which simply adds more details. You can think of this by the analogy of trying to classify an image at multiple resolutions: The lower resolutions give more high-level information, while the higher resolutions add more details.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/posts/2024-06-18-openais-matryoshka-embeddings/Matryoshka_representation_learning.png" title="Matryoshka Representation Learning" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Thus, the retrieval performance increases with increasing representation size. However, [OpenAI reported](https://platform.openai.com/docs/guides/embeddings/) that a `text-embedding-3-large` embedding can be shortened to a size of 256 while still outperforming an unshortened `text-embedding-ada-002` embedding with a size of 1536 on the MTEB benchmark.

## Benefits of Matryoshka Embeddings

- **Cost Efficiency**: Smaller embeddings reduce storage costs and computational requirements
- **Faster Search**: Reduced dimensionality means faster similarity calculations
- **Flexible Performance**: Trade off accuracy for speed based on your application needs
- **Backward Compatibility**: Can start with full embeddings and optimize later

## Using Matryoshka Embeddings with Weaviate

The integration with Weaviate is straightforward, allowing you to specify the embedding dimensions when setting up your collection...

*[Content continues with technical implementation details]*